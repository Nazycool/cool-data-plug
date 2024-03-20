from django.shortcuts import redirect


def login_required(view_func):
    def wrapper(request, *args, **kwargs):
        # Check if authentication token is present in the session
        if 'auth_token' in request.session:
            return view_func(request, *args, **kwargs)
        else:
            # Redirect to the login page if user is not authenticated
            return redirect('login')
    return wrapper
