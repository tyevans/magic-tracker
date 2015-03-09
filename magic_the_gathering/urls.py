from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'magic_the_gathering.views.index'),
    url(r'^api/', include('magic_the_gathering.api.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
