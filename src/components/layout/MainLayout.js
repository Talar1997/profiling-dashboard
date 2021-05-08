import React, {useState} from "react";

import "../../assets/Layout.scss";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer"
import {Header} from "carbon-components-react/lib/components/UIShell"
import StoryContainer from "./StoryContainer"
import NavigationBar from "./NavigationBar"
import Sidebar from "./Sidebar"
import RightPanel from "./RightPanel"

export default function MainLayout(props) {
  const [isSwitcherExpanded, setIsSwitcherExpanded] = useState(false)
  const toggleSwitcher = () => setIsSwitcherExpanded(!isSwitcherExpanded)

  return (
    <div className="container">
      <HeaderContainer
        render={({isSideNavExpanded, onClickSideNavExpand}) => (
          <>
            <Header aria-label="FuzzySet Dashboard">
              <NavigationBar onClick={onClickSideNavExpand}
                             isActive={isSideNavExpanded}
                             toggleSwitcher={toggleSwitcher}/>
              <Sidebar isSideNavExpanded={isSideNavExpanded}/>
            </Header>

            <StoryContainer>
              {props.children}
            </StoryContainer>

            <RightPanel isSwitcherExpanded={isSwitcherExpanded}/>
          </>
        )}
      />
    </div>
  );
}
