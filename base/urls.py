from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard/', views.myDashborad, name='dashboard'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register, name='register'),
    path('forgot-password/', views.forgot_password, name='forgot'),
    path('logout/', views.logout_view, name='logout'),
    
    
    path('mtn-data-list/', views.mtn_data_list, name='mtn-data-list'),
    path('9mobile-data-list/', views.nineMobile_data_list, name='9mobile-data-list'),
    path('glo-data-list/', views.glo_data_list, name='glo-data-list'),
    path('airtel-data-list/', views.airtel_data_list, name='airtel-data-list'),
    
]
