# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- 
<div className="w-full">

      {/* Hero Section */}
      <section className="bg-base-200 py-16 text-center">
        <h1 className="text-3xl font-bold">Best Tutoring Platform</h1>
        <p className="mt-2">Find the Right Tutor in Your Area</p>
        <button className="btn btn-primary mt-4">Find a Tutor</button>
      </section>

      {/* Search Tutoring Jobs */}
      <section className="py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold">Search Tutoring Jobs</h2>
        <p className="mt-2 max-w-2xl mx-auto">
          Looking for interesting tutoring jobs to excel your teaching career?  
          We help you find verified tutoring jobs in your area.
        </p>
        <button className="btn btn-secondary mt-4">Search Jobs</button>
      </section>

      {/* Popular Tutors */}
      <section className="py-16 bg-base-100">
        <h2 className="text-center text-xl font-bold">Our Popular Tutors</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card shadow-md">
              <figure>
                <img src={`https://via.placeholder.com/300?text=Tutor+${i}`} />
              </figure>
              <div className="card-body text-center">
                <h3 className="font-bold">Tutor Name {i}</h3>
                <p>View Details</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subject Specialist */}
      <section className="py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-bold">Find Your Subject Specialist</h2>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {["Math", "Physics", "Chemistry", "Biology"].map((subject) => (
            <button key={subject} className="btn btn-outline">
              {subject}
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-base-200 py-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div><h3 className="text-2xl font-bold">521418+</h3><p>Total Request</p></div>
          <div><h3 className="text-2xl font-bold">135331+</h3><p>Total Tutors</p></div>
          <div><h3 className="text-2xl font-bold">5555+</h3><p>Success Jobs</p></div>
          <div><h3 className="text-2xl font-bold">4.7</h3><p>Average Rating</p></div>
        </div>
      </section>

      {/* Tutoring Types */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-bold mb-10">Tutoring Types</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Home Tutoring" },
            { title: "Online Tutoring" },
            { title: "Group Tutoring" },
          ].map((item) => (
            <div key={item.title} className="card shadow">
              <div className="card-body text-center">
                <h3 className="font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-base-100">
        <h2 className="text-center text-xl font-bold">People Love Us!</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
          <div className="card shadow-md p-6">
            <p>“Excellent service and verified tutors!”</p>
            <h4 className="font-bold mt-4">– Parent Review</h4>
          </div>
          <div className="card shadow-md p-6">
            <p>“Great experience. Highly recommended!”</p>
            <h4 className="font-bold mt-4">– Student Review</h4>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-bold">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card shadow">
              <figure>
                <img src={`https://via.placeholder.com/300?text=Service+${i}`} />
              </figure>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 max-w-5xl mx-auto">
        <h2 className="text-center text-xl font-bold">How it Works?</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10 text-center">
          <div className="card p-4 shadow">Create Tutor Profile</div>
          <div className="card p-4 shadow">Apply for Jobs</div>
          <div className="card p-4 shadow">Get Free Tutoring Job Alert</div>
          <div className="card p-4 shadow">Start Tutoring & Grow Income</div>
        </div>
      </section>

    </div>
 -->
