function RegisterPage() {
  return (
    <div className="card">
      <div className="login-form">
        <p className="text-3xl font-bold mb-5">Register</p>

        <form className="mb-5" action="/register" method="POST">
          <div className="relative">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username*"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              required
            />
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Wachtwoord*"
              required
            />
          </div>

          <input className="btn" type="submit" value="Register" />
        </form>
        <a href="/login-prototype">login page prototype</a>
      </div>
    </div>
  );
}

export default RegisterPage;
