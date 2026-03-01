export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-black mb-8">Establish Comms</h1>
      <div className="p-8 rounded-3xl bg-[#1E1E1E] border border-white/10">
        <p className="text-white/70 mb-6">For support, enterprise inquiries, or tactical feedback, initiate a secure transmission to our team.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg">
            <span className="font-bold text-[#03DAC6]">Email:</span>
            <a href="mailto:workmailkartikeya@gmail.com" className="hover:text-white transition-colors">workmailkartikeya@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}