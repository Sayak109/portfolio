import { contactPrompts, socialLinks } from "@/lib/portfolio-data";
import { ContentSection, LinkTag, PageContainer, PageHero, SurfaceCard } from "@/components/portfolio/portfolio-ui";

export default function ContactPage() {
  return (
    <PageContainer>
      <main>
        <PageHero
          eyebrow="Contact"
          title="A contact section that already feels launch-ready."
          description="The form UI is now in place with the same visual system as the rest of the site. We can connect it to email, Formspree, Resend, or a custom backend in the next pass."
        />

        <ContentSection className="pt-4">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <SurfaceCard className="p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8dd8ff]">Send a message</p>
              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/62">Name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/28 focus:border-[#7dd3fc]/35 focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-white/62">Email</span>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/28 focus:border-[#7dd3fc]/35 focus:outline-none"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">Subject</span>
                  <input
                    type="text"
                    placeholder="Project, role, or collaboration"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/28 focus:border-[#7dd3fc]/35 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">Message</span>
                  <textarea
                    rows={7}
                    placeholder="Tell me a little about what you want to build."
                    className="w-full rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/28 focus:border-[#7dd3fc]/35 focus:outline-none"
                  />
                </label>
                <button
                  type="button"
                  className="rounded-full border border-[#7dd3fc]/30 bg-[#7dd3fc]/14 px-5 py-3 text-sm font-medium text-[#d9f6ff] transition hover:border-[#7dd3fc]/55 hover:bg-[#7dd3fc]/20"
                >
                  Form UI ready for backend hookup
                </button>
              </form>
            </SurfaceCard>

            <div className="grid gap-6">
              <SurfaceCard className="p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8dd8ff]">Conversation starters</p>
                <div className="mt-6 space-y-4">
                  {contactPrompts.map((prompt) => (
                    <div key={prompt} className="rounded-3xl border border-white/8 bg-black/18 p-4 text-sm leading-7 text-white/68">
                      {prompt}
                    </div>
                  ))}
                </div>
              </SurfaceCard>
              <SurfaceCard className="p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#8dd8ff]">Public profiles</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <LinkTag key={link.label} href={link.href} label={link.label} />
                  ))}
                </div>
              </SurfaceCard>
            </div>
          </div>
        </ContentSection>
      </main>
    </PageContainer>
  );
}
