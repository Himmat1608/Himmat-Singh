import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Github, Copy, Check, Send, MapPin, Terminal } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'chimmatasingh59@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <span className="text-zinc-600">//</span> get in touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100 flex items-center gap-2">
            <span className="text-emerald-400">&gt;</span> contact_me
          </h2>
          <p className="text-sm text-zinc-400 font-sans mt-2">
            Open for Python, Backend, AI, and Cloud internship roles. Feel free to send a message or email directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <Card className="border-zinc-800 bg-zinc-950/90 hover:border-emerald-500/40 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-zinc-100 text-sm">Email Address</h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">{email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <a href={`mailto:${email}`} className="flex-1">
                    <Button variant="primary" size="sm" className="w-full">
                      <Mail className="w-3.5 h-3.5 mr-2" />
                      Send Email
                    </Button>
                  </a>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleCopyEmail}
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-300" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* GitHub Card */}
            <Card className="border-zinc-800 bg-zinc-950/90 hover:border-emerald-500/40 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-zinc-100 text-sm">GitHub Profile</h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">github.com/Himmat1608</p>
                  </div>
                </div>

                <a
                  href="https://github.com/Himmat1608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                >
                  <Button variant="terminal" size="sm" className="w-full justify-center">
                    <Github className="w-3.5 h-3.5 mr-2" />
                    Visit GitHub Profile
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Location Notice Card */}
            <Card className="border-zinc-800 bg-zinc-950/90 font-mono text-xs text-zinc-400">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>Location &amp; Availability</span>
                </div>
                <p className="text-zinc-300 font-sans text-xs">
                  Based in <strong>Kota, Rajasthan</strong>. Available for remote internship positions nationwide &amp; internationally.
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Right Column: Netlify Compatible Contact Form */}
          <div className="lg:col-span-7">
            <Card className="border-zinc-800 bg-zinc-950/90">
              <CardHeader className="border-b border-zinc-900 pb-4">
                <CardTitle className="text-lg font-mono flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span>Send a Direct Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-4 font-mono text-xs"
                >
                  {/* Required hidden input for Netlify Form Handling */}
                  <input type="hidden" name="form-name" value="contact" />

                  <div>
                    <label htmlFor="name" className="block text-zinc-300 mb-1.5 font-mono">
                      &gt; your_name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Hiring Manager / Recruiter"
                      className="w-full rounded-md border border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-zinc-300 mb-1.5 font-mono">
                      &gt; your_email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      className="w-full rounded-md border border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-zinc-300 mb-1.5 font-mono">
                      &gt; message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your message or internship inquiry here..."
                      className="w-full rounded-md border border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-sans text-sm resize-none"
                    />
                  </div>

                  <Button variant="primary" size="md" type="submit" className="w-full justify-center text-sm py-2.5 mt-2">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
