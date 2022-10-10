from django.contrib import admin
from .models import Comment

class CommentAdmin(admin.ModelAdmin):
    list_display = ('name', 'comment', 'createdAt')


admin.site.register(Comment, CommentAdmin)

