
import { Button } from './Button';
import './header.css';
import DesktopNav from './DesktopNav';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Navbar = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (

   

    <nav className="w-full container mx-auto flex items-center justify-between px-2 bg-white rounded-xl">
      <div className="flex w-full items-center justify-between">
        {/* <MobileSidebar
          walletAddress={walletAddress}
          networkOptions={networkOptions}
          handleNetworkChange={handleNetworkChange}
        /> */}
        {/* <DesktopNav
        /> */}
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
            </>
          )}
        </div>
      </div>
    </nav>



);
