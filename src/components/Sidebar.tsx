import { AppEntries } from "./AppEntries"

export const Sidebar = () => {
    return (
        <aside className="sidebar__content">
            <div className="sidebar__failed">
                <h1>Failed to Load Data</h1>
            </div>
            <AppEntries />
        </aside>
    )
}
