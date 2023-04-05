from django.shortcuts import render
from .serializers import ForceMetricsDemoSerializer
from rest_framework import viewsets
from .models import ForceMetricsDemo

# Create your views here.
class ForceMetricsDemoView(viewsets.ModelViewSet):
    serializer_class = ForceMetricsDemoSerializer
    queryset = ForceMetricsDemo.objects.all()
