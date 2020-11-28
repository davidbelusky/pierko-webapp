from django.db import models

class GalleryCategory(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    category_name = models.CharField(max_length=24,unique=True)

    def __str__(self):
        return self.category_name

class GalleryImage(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=24)
    details = models.TextField(max_length=350)
    gallery_image = models.ImageField(blank=False, null=False, upload_to="files/gallery_images/")
    show = models.BooleanField(default=True)
    category = models.ForeignKey(GalleryCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Articles(models.Model):
    class PositionChoices(models.TextChoices):
        LEFT = "flex-start"
        RIGHT = "flex-end"

    created_date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=32)
    text = models.TextField(max_length=600)
    article_image = models.ImageField(blank=False, null=False, upload_to="files/article_images/")
    position = models.CharField(max_length=12, choices=PositionChoices.choices)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # Select different position than have last object. First object have flex-start
        if len(Articles.objects.all()) == 0:
            self.position = "flex-start"
            super().save(*args, **kwargs)
            return

        last_position = Articles.objects.latest('created_date').position
        if last_position == "flex-start":
            new_position = "flex-end"
        else:
            new_position = "flex-start"
        self.position = new_position
        super().save(*args, **kwargs)

