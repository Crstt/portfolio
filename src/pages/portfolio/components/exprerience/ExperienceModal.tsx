import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../../providers/ThemeProvider';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  originPosition?: { x: number; y: number };
  job: any;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose, originPosition, job }) => {
  const { darkMode } = useTheme();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`fixed backdrop-blur-sm inset-0 bg-opacity-50 z-40 flex items-center justify-center`}
          >
            {/* Modal */}
            <motion.div
              layout
              initial={{
                opacity: 0,
                scale: 0.5,
                x: originPosition?.x || 0,
                y: originPosition?.y || 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transition: { type: 'spring', stiffness: 300, damping: 30 }
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                x: originPosition?.x || 0,
                y: originPosition?.y || 0,
                transition: { duration: 0.2 }
              }}
              onClick={(e) => e.stopPropagation()}
              className={` rounded-lg shadow-xl w-full max-w-3xl m-4 z-50 overflow-hidden" 
                ${darkMode ? "bg-gray-900 text-white" : "bg-cyan-50 text-gray-800"}
              `}
            >
              <div className="flex">
                <h2 className="text-2xl font-bold ml-3 self-center">{job.title}</h2>
                {/* Close button */}
                <div className="flex justify-end p-4 ml-auto">
                  <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal content */}
              <div className={`px-6 pb-6 ${darkMode ? "bg-gray-900 text-white" : "bg-cyan-50 text-black"}`}>
                {job && (
                  <div className="space-y-4">
                    <p className={`text-xl ${darkMode ? "text-grey-300" : "text-gray-900"}`}>{job.company}</p>
                    <p className={` ${darkMode ? "text-grey-300" : "text-gray-800"}`}>{job.date}</p>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h3 className="text-lg font-semibold mb-2">Description</h3>
                      <p className={` ${darkMode ? "text-grey-300" : "text-gray-800"}`}>{job.description}</p>
                    </div>

                    {/* You can add more details here */}
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h3 className="text-lg font-semibold mb-2">Achievements & Responsibilities</h3>
                      <ul className={`list-disc pl-5 space-y-1 ${darkMode ? "text-grey-300" : "text-gray-800"}`}>
                        {job.achivementsResponsibilities.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExperienceModal;