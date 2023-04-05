from django.contrib import admin
from .models import ForceMetricsDemo

# Register your models here.
class ForceMetricsDemoAdmin(admin.ModelAdmin):
    list = ('firstName', 'lastName')
    admin.site.register(ForceMetricsDemo)
