import BottomNavigationBar from "../components/BottomNavigationBar";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";

export default function MainLayout() {
    return (
        <>
            <Header />
            <NewsCard 
                title="England Women's Team Wins Euro Championship" 
                desc="aiofmamkowa jj ajmnj jasnjjssda asjdasnja jajds as dad a a am a ma a  a a a a  a a a aa a a a a a a  a a a a a  a a  a a a a a    " 
                date="aaaa" />
            <BottomNavigationBar />
        </>
    );
}