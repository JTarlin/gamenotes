//component imports
import Header from "../Header/Header";
import NewNote from "./NewNote/NewNote";
import MyNotes from "./MyNotes/MyNotes";

//styling import
import "./DashboardPage.scss";

export default function DashboardPage() {

    //make api call to backend for users, or to local storage for guest

    return (
        <div className="dashboardpage">
            <Header />
            <section className="dashboardpage__content">
            {/* creating a new note, opens the editor */}
            <NewNote />
            {/* for once we have persistent data on the notes: */}
            <MyNotes />
            </section>
        </div>
    )
}