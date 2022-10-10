from .api import CommentViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/comment', CommentViewSet, 'comment')

urlpatterns = router.urls