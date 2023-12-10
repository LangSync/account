import { AuthBtn } from "@/components/auth/login_btn";
import { LogoutBtn } from "@/components/auth/logout";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { getSession, signOut, useSession } from "next-auth/react";

export function AvatarC() {
  const { data: session } = useSession();

  return !!session && !!session?.user ? (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src={session.user.image || ""}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">{session.user.name}</p>
          <p className="font-semibold">{session.user.email ?? ""}</p>
        </DropdownItem>

        {/* <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
        <DropdownItem
          key="logout"
          color="danger"
          onClick={() => {
            getSession().then((session) => {
              if (session) {
                signOut();
              }
            });
          }}
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : null;
  // <AuthBtn />
}
