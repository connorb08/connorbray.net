import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GearIcon } from "@radix-ui/react-icons";
import style from "./style.module.css";

export default function SettingCog() {
    return (
        <DropdownMenu.Root>
            <div className={style.DropdownMenu}>
                <DropdownMenu.Trigger asChild>
                    <button
                        className={style.IconButton}
                        aria-label="Customise options"
                    >
                        <GearIcon className={style.Icon} />
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <div className={style.DropdownPortal}>
                        <DropdownMenu.Content
                            sideOffset={5}
                            className={style.Content}
                        >
                            <DropdownMenu.Item className={style.Item}>
                                New Tab
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </div>
                </DropdownMenu.Portal>
            </div>
        </DropdownMenu.Root>
    );
}
