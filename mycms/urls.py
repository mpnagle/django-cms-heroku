from django.conf.urls.defaults import *
from django.contrib import admin
from django.conf import settings
#from mycms.views import home_view

admin.autodiscover()

urlpatterns = patterns('',
#    url(r'^$', home_view),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('cms.urls')),
)


urlpatterns = patterns('',
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
    url(r'', include('django.contrib.staticfiles.urls')),
) + urlpatterns
