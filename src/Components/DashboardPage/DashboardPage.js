//component imports
import Header from "../Header/Header";

export default function DashboardPage() {

    //make api call to backend for users, or to local storage for guest

    return (
        <div className="dashboardpage">
            <Header />
            {/* for once we have persistent data on the notes: */}
            {/* <GameNotes /> */}

        </div>
    )
}