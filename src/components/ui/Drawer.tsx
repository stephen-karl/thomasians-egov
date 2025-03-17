import { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion";

export interface ISheet {
  name: string;
  component: ReactNode;
}

interface IPanel{
  children: ReactNode;
}

interface IDrawer {
  mainSheet: ISheet;
  isOpen: boolean;
  sideBar?: boolean;
}

const Sheet = ({ children }: IPanel ) => {
  return (
    <div 
      className="bg-white rounded-2xl h-full"
    >
      {children}
    </div>
  );
}


const Drawer = ({
  mainSheet,
  isOpen,
}: IDrawer) => {

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.main
          className={`h-screen w-screen fixed top-0 right-0 bottom-0 left-0 z-[110]`}          
          layout
        >
          {/* The backdrop */}
          <motion.article 
            className={`h-screen w-screen bg-black/40 backdrop-blur-sm fixed z-[120]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          /> 
            {/* The drawer */}
            <motion.article 
              className={`h-screen w-screen fixed z-[140]`}
              layout
            >
              {/* The   */}
              <motion.section 
                className="w-full h-full flex items-center justify-end gap-2"
                animate={{ x: 0 }}
                transition={{ duration: 0.30, ease: "easeOut"}}
              > 

                <motion.div 
                  className=" w-[30vw] flex-shrink-0 h-full py-4 pr-4 relative "
                  initial={{ x: "100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.30 , ease: "easeInOut" }}
                >
                  <Sheet>
                    {mainSheet.component}
                  </Sheet>
                </motion.div>
              </motion.section>
            </motion.article>
        </motion.main>
      )}
    </AnimatePresence>
  )
}

export default Drawer
