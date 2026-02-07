import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating or have a project in mind? I'd love to hear from you. 
          Let's create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          {/* ─── Email button ─── */}
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            <a href="mailto:ezraktoo09@gmail.com">
              Send Email
            </a>
          </Button>

          {/* ─── LinkedIn button ─── */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <a 
              href="https://www.linkedin.com/in/ezra-kipkoech-063291289?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>

          {/* ─── GitHub button ─── */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <a 
              href="https://github.com/TooEzra" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>

          {/* 
            You can easily add more platforms here 
            (Twitter/X, Instagram, WhatsApp, Calendly, etc.)
          */}
          {/* Example extra button: */}
          {/* 
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Twitter / X
            </a>
          </Button>
          */}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ezra Kipkoech. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}





// import { Button } from "@/components/ui/button";

// export function Contact() {
//   return (
//     <section id="contact" className="py-20 px-6 bg-card/50">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
//         <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Interested in collaborating or have a project in mind? I'd love to hear from you. Let's create something amazing together.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button
//             size="lg"
//             className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
//           >
//             Send Email
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
//           >
//             LinkedIn
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
//           >
//             GitHub
//           </Button>
//         </div>

//         <div className="mt-16 pt-8 border-t border-border">
//           <p className="text-muted-foreground text-sm">
//             © 2026 Ezra Kipkoech. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
