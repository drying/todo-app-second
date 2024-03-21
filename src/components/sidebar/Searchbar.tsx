import React from 'react'
import { Search } from '@mui/icons-material'
import './Searchbar.css'

type Props = {
    setStatusFilter: React.Dispatch<
        React.SetStateAction<'未着手' | '進行中' | '完了'>
    >
}

export const Searchbar: React.FC<Props> = ({ setStatusFilter }) => {
    return (
        <div className="searchBar">
            <div className="searchInput">
                <Search className="searchIcon" />
                <input
                    type="text"
                    onChange={(e) =>
                        setStatusFilter(
                            e.target.value as '未着手' | '進行中' | '完了'
                        )
                    }
                    placeholder="ステータスを入力（未着手、進行中、完了）"
                />
            </div>
        </div>
    )
}

export default Searchbar
