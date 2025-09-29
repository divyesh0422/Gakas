import { useState } from 'react';
import { FaPaperPlane, FaCheck, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const EnhancedSubscribeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.mobile && !/^[\d\s+-]+$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid phone number';
    }
    
    if (formData.mobile && formData.mobile.replace(/\D/g, '').length < 10) {
      newErrors.mobile = 'Phone number must be at least 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      mobile: true,
      message: true
    });

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Subscribed:', formData);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
      setTouched({});
    } catch (err) {
      setErrors({
        ...errors,
        form: 'Subscription failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-2xl text-center shadow-lg">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <FaCheck className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Successfully Subscribed!</h3>
          <p className="text-green-600 mb-2 text-lg">Thank you for joining our community</p>
          <p className="text-green-500 mb-6">You'll receive our latest updates and exclusive offers soon.</p>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Subscribe Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <FaPaperPlane className="text-white text-xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Stay Updated with Us</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Subscribe to receive exclusive updates, latest game releases, and special bonuses directly in your inbox
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {errors.form && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center">
            <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {errors.form}
          </div>
        )}

        {/* Name and Email - Horizontal on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 items-center">
              <FaUser className="mr-2 text-blue-500" size={14} />
              Your Name
              <span className="text-gray-400 font-normal ml-1">(Optional)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white"
                placeholder="Enter your name"
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 items-center">
              <FaEnvelope className="mr-2 text-blue-500" size={14} />
              Email Address
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 pl-10 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white ${
                  errors.email && touched.email 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                }`}
                placeholder="your@email.com"
                required
              />
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.email && touched.email && (
              <p className="text-red-600 text-sm flex items-center mt-1">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Mobile and Message - Horizontal on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="mobile" className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <FaPhone className="mr-2 text-blue-500" size={14} />
              Mobile Number
              <span className="text-gray-400 font-normal ml-1">(Optional)</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 pl-10 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white ${
                  errors.mobile && touched.mobile 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                }`}
                placeholder="+91 98765 43210"
              />
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.mobile && touched.mobile && (
              <p className="text-red-600 text-sm flex items-center mt-1">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.mobile}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <FaComment className="mr-2 text-blue-500" size={14} />
              Your Message
              <span className="text-gray-400 font-normal ml-1">(Optional)</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white resize-none"
                placeholder="Tell us what you're looking for..."
              ></textarea>
              <FaComment className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5 flex-shrink-0"
          />
          <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
            I agree to receive communications about game updates, bonuses, and promotional offers. 
            I understand that I can unsubscribe at any time and that my information will be handled 
            in accordance with the privacy policy.
          </label>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-xl text-white font-semibold focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 ${
              isSubmitting 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
            } flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Processing Your Subscription...
              </>
            ) : (
              <>
                <FaPaperPlane className="mr-3" />
                Subscribe Now & Get Updates
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
          We respect your privacy and are committed to protecting your personal data. 
          Your information will only be used to send you relevant updates and offers. 
          You can unsubscribe at any time using the link in our emails.
        </p>
      </form>
    </div>
  );
};

export default EnhancedSubscribeForm;