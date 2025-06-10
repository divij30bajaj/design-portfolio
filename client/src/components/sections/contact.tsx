import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Download, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ContactSection() {
  const { toast } = useToast();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contactInfoRef, isVisible: contactInfoVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const handleResumeDownload = async () => {
    try {
      const response = await fetch("/api/resume");
      if (!response.ok) {
        throw new Error("Resume not available");
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Shyamali_Panda_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Resume downloaded",
        description: "Thank you for your interest!",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Resume is currently unavailable. Please contact me directly.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "shyamalijsr790@gmail.com",
      subtitle: "Drop me a line anytime",
      color: "bg-primary",
    },
    {
      icon: Phone,
      title: "+91-7903937163",
      subtitle: "Available Mon-Fri, 9am-6pm IST",
      color: "bg-accent",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/shyamali-panda-6152a1185/", color: "bg-blue-600 hover:bg-blue-700" },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to create something amazing? I'd love to hear about your project and discuss how we can bring your vision to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            ref={contactInfoRef}
            initial={{ opacity: 0, x: -30 }}
            animate={contactInfoVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contactInfoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                    <info.icon className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    <p className="text-gray-400">{info.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Resume Download */}
            <div className="mt-8 pt-8 border-t border-gray-600">
              <Button
                onClick={handleResumeDownload}
                className="inline-flex items-center space-x-3 bg-accent text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </div>
            

          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={formVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your full name"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="What's this about?"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder="Tell me about your project or just say hello!"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
