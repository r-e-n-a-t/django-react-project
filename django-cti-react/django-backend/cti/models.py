from django.db import models

# Create your models here.
class Comment(models.Model):
    name = models.CharField(max_length=120)
    comment = models.TextField()
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    def _str_(self):
        return self.name
