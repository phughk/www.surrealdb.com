curl -X POST \
	-H "Accept: application/json" \
	-d '{"NS":"test", "DB":"test", "SC":"user", "name":"John Doe", "email":"john@doe.org", "password":"VerySecurePassword!"}' \
	http://localhost:8000/signup
