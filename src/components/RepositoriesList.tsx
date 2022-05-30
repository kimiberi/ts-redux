import React, { useEffect, useRef, useState } from 'react'
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState<string>('');

    const inputRef = useRef<HTMLInputElement | null>(null);
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypeSelector((state) => state.repositories); // it came from reducers > index.ts
    // receive ALL the entire state of the redux store
    // state.repositories -> means we just remove the [[Prototype]]: Object (see terminal)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    }

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }

        inputRef.current.focus()
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} value={term} onChange={onChange} />
                <button>Search</button>
            </form>

            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading &&
                data.map((name, index) => <div key={index}>{name}</div>)
            }
        </div>
    )
}

export default RepositoriesList