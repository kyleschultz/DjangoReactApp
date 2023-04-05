from rest_framework import serializers
from .models import ForceMetricsDemo

class ForceMetricsDemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForceMetricsDemo
        fields = ('id', 'firstName', 'lastName')