package com.example.dienstleistungsSoftware.notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Service
@RequestMapping("/notification")
public class NotificationController {
  @Autowired
  private NotificationService notificationService;

  @GetMapping("/{userEmail}")
  public List<NotificationDAO> getAllNotification(@PathVariable String userEmail) {
    return notificationService.getAllNotification(userEmail);
  }

  @GetMapping("/{userEmail}/{serviceId}")
  public NotificationEntity getNotificationByUserEmailAndDienst(@PathVariable String userEmail, @PathVariable long serviceId) {
    return notificationService.getNotificationByUserEmailAndServiceId(userEmail, serviceId);
  }

  @PutMapping("/update/{userEmail}")
  public void updateNotification(
    @PathVariable
      String userEmail) {
    notificationService.updateNotification(userEmail);
  }

  @PostMapping("/create")
  public NotificationEntity createNotification(
    @RequestBody
      NotificationDTO notificationDTO) {
    System.out.println(notificationDTO.getServiceId());
    System.out.println(notificationDTO.getUserSenderEmail());
   return notificationService.createNotification(notificationDTO);
  }

  @DeleteMapping("/delete/{notificationId}")
  public void deleteNotification(
    @PathVariable
      Long notificationId) {
    notificationService.deleteNotification(notificationId);
  }

  @DeleteMapping("/notification/delete/{userEmail}/{dienstId}")
  public void deleteNotificationByUserEmailAndDienst(
    @PathVariable
      String userEmail, @PathVariable
        long dienstId) {
    notificationService.deleteNotificationByUserEmailAndDienst(userEmail, dienstId);
  }
  @PostMapping("/{test}")
  public void test(@PathVariable String test) {
    System.out.println(test);
  }
}
