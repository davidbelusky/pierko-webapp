from django.contrib import admin
from pierko_api.models import GalleryImage, GalleryCategory, Articles

# Register your models here.

admin.site.register(GalleryImage)
admin.site.register(GalleryCategory)


@admin.register(Articles)
class ArticlesAdmin(admin.ModelAdmin):
    ordering = ("-created_date",)
    exclude = ['position']