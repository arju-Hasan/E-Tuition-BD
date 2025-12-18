import about from '../../assets/bg-img/about.avif';
const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12 ">
        <h1 className="text-4xl font-bold text-primary mb-4">About eTuitionBD</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          eTuitionBD is a modern tuition management platform connecting students with skilled tutors
          across Bangladesh. We ensure quality, transparency, and a hassle-free learning experience.
        </p>
      </div>
      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-10 justify-center items-center mb-20 ">
        <div className='items-center'>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-7">
            Our mission is to make finding qualified tutors simple, fast, and reliable. Students can
            post tuition requirements, tutors can apply instantly, and admins ensure a secure and
            verified ecosystem.
          </p>
        </div>
        <img
          src={about}
          alt="Mission"
          className="rounded-xl shadow-md w-50 h-50"
        />
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-base-200 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Verified Tutors</h3>
            <p className="text-gray-600">
              Every tutor profile is verified by our admin panel to ensure trust and quality.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Smart Dashboard</h3>
            <p className="text-gray-600">
              Students and tutors get separate dashboards to manage tuitions, payments, and profiles.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Fully secure Stripe payment system ensures safe salary transactions.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-base-200 rounded-xl">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="font-semibold text-xl mb-2">Post Tuition</h3>
            <p className="text-gray-600">
              Students submit tuition requirements with all necessary details.
            </p>
          </div>

          <div className="text-center p-6 bg-base-200 rounded-xl">
            <div className="text-5xl mb-4">👨‍🏫</div>
            <h3 className="font-semibold text-xl mb-2">Tutor Applies</h3>
            <p className="text-gray-600">
              Qualified tutors apply with expected salary and experience.
            </p>
          </div>

          <div className="text-center p-6 bg-base-200 rounded-xl">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="font-semibold text-xl mb-2">Approve & Pay</h3>
            <p className="text-gray-600">
              Students approve the best tutor and complete secure payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
