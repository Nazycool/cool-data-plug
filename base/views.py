from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
import requests

from base.check_connection import check_internet_connection

from .decorators import login_required


def home(request):
    return render(request, 'base/home.html', {})


def myDashborad(request):
    return render(request, 'base/dashboard.html', {})


def register(request):
    if request.method == 'POST':

        # Extract the user data
        fname = request.POST['fname']
        username = request.POST['username']
        email = request.POST['email']
        phone_number = request.POST['pnumber']
        password = request.POST['pass']
        referal = request.POST['refp']

        payloads = {'phone': phone_number,
                    'password': password, 'email': email, 'name': fname, 'user': username, 'referal': referal, }

        # Make a requests to the api endpoint
        response = requests.post(
            'https://gtopup.site/coolDataPlug/user_sign_up.php', data=payloads)

        if response.status_code == 200:
            raw_data = response.json()
            print(raw_data)
            if raw_data['error'] == False:
                # return render(request, 'base/login.html', {'login': True, 'message': raw_data['message']})
                return redirect('login')
            else:
                return render(request, 'base/register.html', raw_data)
        else:
            return render(request, 'base/register.html', {'message': 'Something went wrong please try again later.', 'error': True})

    return render(request, 'base/register.html', {})


def login_view(request):
    if not check_internet_connection():
        return render(request, 'base/login.html', {'message': 'You are not online, please check your internet connection', 'error': True})
    if request.method == 'POST':
        phone_number = request.POST['pnumber']
        password = request.POST['pass1']

        payloads = {'phone': phone_number, 'password': password}

        # Make a requests to the api endpoint
        response = requests.post(
            'https://gtopup.site/coolDataPlug/user_login.php', data=payloads)
        if response.status_code == 200:
            user_data = response.json()

            if not user_data['error']:
                # Authentication successifully

                # Get User's infomation
                status = user_data.get('Status')
                print(status)
                status = int(status)
                if status == 3:
                    return render(request, 'base/login.html', {'message': 'You are suspended from using our services, please contact customer support', 'error': True})

                # if status == 1:
                #     return render(request, 'base/login.html', {'message': 'Please verify your email to proceed', 'error': True})

                token = user_data['Authentication']
                username = user_data.get('User')
                name = user_data.get('Name')
                email = user_data.get('Email')

                # Store user's data in the session
                # request.session['auth_token'] = token
                # request.session['username'] = username
                # request.session['name'] = name
                # request.session['email'] = email

                # Redirect user to dashboard
                return redirect('dashboard')
            else:
                return render(request, 'base/login.html', user_data)
        else:
            return render(request, 'base/login.html', {'error': True, 'message': 'Error while trying to log user in'})
    else:
        return render(request, 'base/login.html', {})
    # return render(request, 'base/login.html', {})


def logout_view(request):
    logout(request)
    # Optionally, clear any session data related to the user
    request.session.clear()
    return redirect('login')


def forgot_password(request):
    return render(request, 'base/forgot-password.html', {})

# {'error': False, 'message': 'Login Successfully', 'Authentication': '873e430d2ec8403cfdec55583de9c5ef6adfc', 'User': 'amarr', 'Name': 'Usman Aminu Usman',
#     'Email': 'uthmanameen2003@gmail.com', 'Phone': '08097256756', 'Type': '1', 'Status': '1', 'Referral': '', 'RegDate': '2024-03-16 12:22:55', 'WemaBank': '', 'rolex': '', }


def mtn_data_list(request):
    return render(request, 'base/mtn-data-list.html')
def airtel_data_list(request):
    return render(request, 'base/airtel-data-list.html')
def glo_data_list(request):
    return render(request, 'base/glo-data-list.html')
def nineMobile_data_list(request):
    return render(request, 'base/9mobile-data-list.html')