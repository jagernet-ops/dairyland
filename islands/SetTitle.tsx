import { useEffect } from "preact/hooks";
import { ComponentChildren } from "preact" 

interface ComponentProps {
  favicon?: string,
  title?: string,
  children: ComponentChildren
}

function SetTitle({ favicon, title, children }: ComponentProps){
  useEffect(function(){
    if(title){
      GitHubCalendar(".calendar", "jagernet-ops")
      document.title = title;
    }
  },[])
  return(
    <>
      {children}
    </>
  );
}

export default SetTitle;
