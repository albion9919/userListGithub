import create from 'zustand'

const useRepositoriesStore = create((set) => ({
    repositories: [],
    addRepository: (repository) =>
        set((state) => ({
            repositories: [repository, ...state.repositories]
        })),
    addRepositories: (repositories) =>
        set((state) => ({
            repositories: [...repositories, ...state.repositories]
        })),
    removeAllRepositories: () =>
        set(() => ({
            repositories: [],
        }))
}));

const useCommitsStore = create((set) => ({
    commits: [],
    addCommit: (commit) =>
        set((state) => ({
            commits: [commit, ...state.commits]
        })),
    addCommits: (commits) =>
        set((state) => ({
            commits: [...commits, ...state.commits]
        })),
    removeAllCommits: () =>
        set(() => ({
            commits: [],
        }))
}));


const useUserNameStore = create((set) => ({
    userName: "",
    setUserName: (userName) =>
        set((state) => ({
            userName: userName
        }))
}));

const useUserNameInputValueStore = create((set) => ({
    userNameInputValue: "",
    setUserNameInputValue: (userNameInputValue) =>
        set((state) => ({
            userNameInputValue: userNameInputValue
        }))
}));


const useUserStore = create((set) => ({
    user: {name:"", login:"", avatar_url:""},
    setUser: (user) =>
        set((state) => ({
            user: user
        }))
}));

const useDisplayStore = create((set) => ({
    display: -1,
    setDisplay: (display) =>
        set((state) => ({
            display: display
        }))
}));




export {useRepositoriesStore, useUserNameStore, useUserNameInputValueStore, useCommitsStore, useUserStore, useDisplayStore}