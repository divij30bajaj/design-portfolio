import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FigmaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FigmaModal({ isOpen, onClose }: FigmaModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-semibold text-secondary">Chatbot Wireframe Flow</h3>
              <button
                onClick={onClose}
                className="text-slate hover:text-secondary transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&h=900"
                  alt="Detailed Chatbot Wireframe Flow"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-secondary mb-4">Wireframe Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-slate mb-2">User Input Scenarios:</h5>
                      <ul className="text-slate text-sm space-y-1">
                        <li>• Basic product inquiries</li>
                        <li>• Complex troubleshooting flows</li>
                        <li>• Account management requests</li>
                        <li>• Billing and payment issues</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate mb-2">Design Considerations:</h5>
                      <ul className="text-slate text-sm space-y-1">
                        <li>• Progressive disclosure of information</li>
                        <li>• Clear escalation paths</li>
                        <li>• Context-aware responses</li>
                        <li>• Accessibility compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
