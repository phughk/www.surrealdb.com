curl -X POST \
	-H "Accept: application/json" \
	-d '{"NS":"test", "DB":"test", "user":"mary", "password":"VerySecurePassword!"}' \
	http://localhost:8000/signin
