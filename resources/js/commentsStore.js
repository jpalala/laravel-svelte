import { writable } from 'svelte/store';

export const commentsStore = writable([]);

// Function to load comments from a JSON source
export const loadComments = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        commentsStore.set(data.comments); // Assuming your JSON has a 'comments' array
    } catch (error) {
        console.error('Error loading comments:', error);
    }
};

// Function to add a new comment
export const addComment = (comment) => {
    commentsStore.update(comments => {
        return [...comments, comment];
    });
};


