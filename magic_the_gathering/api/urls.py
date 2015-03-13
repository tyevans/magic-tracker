from django.conf.urls import include, url
from rest_framework import routers
from magic_the_gathering.api.views.match import MatchViewSet
from magic_the_gathering.api.views.user import PlayerViewSet

router = routers.DefaultRouter()
router.register(r'users', PlayerViewSet)
router.register(r'matches', MatchViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework'))
]
