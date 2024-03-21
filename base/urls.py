from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard/', views.myDashborad, name='dashboard'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register, name='register'),
    path('forgot-password/', views.forgot_password, name='forgot'),
    path('logout/', views.logout_view, name='logout'),
    
    
    path('mtn-data-list/<str:network>/', views.mtn_data_list, name='mtn-data-list'),
    path('9mobile-data-list/<str:network>/', views.nineMobile_data_list, name='9mobile-data-list'),
    path('glo-data-list/<str:network>/', views.glo_data_list, name='glo-data-list'),
    path('airtel-data-list/<str:network>/', views.airtel_data_list, name='airtel-data-list'),
    
    
    path('process/<str:amount>/', views.process_purchase, name='process'),
    
]
