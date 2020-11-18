from django.db import models

class GalleryImage(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=24)
    details = models.TextField(max_length=350)
    gallery_image = models.ImageField(blank=False, null=False, upload_to="files/gallery_images/")
    show = models.BooleanField(default=True)
