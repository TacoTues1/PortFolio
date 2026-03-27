import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/TacoTues1' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:alfnzperez@gmail.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    emailjs
      .send(
        'service_47wpvcg',
        'template_38f1kri',
        {
          name: formData.name,
          email_id: formData.email,
          message: formData.message,
        },
        'JSyV51NPodTEnPL9p'
      )
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      });
  };

  return (
    <section id="contact" className="section-shell pt-2 pb-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="panel-card p-8 sm:p-10"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Contact Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8 mt-8">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-slate-100 text-lg font-medium">Reach me directly</p>
              <a
                href="mailto:alfnzperez@gmail.com"
                className="inline-block mt-3 text-cyan-300 hover:text-cyan-200"
              >
                alfnzperez@gmail.com
              </a>

              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-slate-200 flex items-center justify-center hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="input-field"
                />
              </div>

              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project"
                className="input-field resize-none"
              />

              {status.message ? (
                <p
                  className={`text-sm ${
                    status.type === 'success'
                      ? 'text-emerald-300'
                      : status.type === 'error'
                      ? 'text-rose-300'
                      : 'text-cyan-300'
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 font-medium hover:bg-cyan-500/20 disabled:opacity-60 transition-colors"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
