import User from '../models/user.js';

// Contrôleur pour l'inscription des utilisateurs
export const registerUser = async (req, res) => {
    try {
        const { email, username, first_name, last_name, password } = req.body;
        
        // Validation des données requises
        if (!email || !username || !first_name || !last_name || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required: email, username, first_name, last_name, password' 
            });
        }
        
        // Validation de l'email (simple)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide a valid email address'
            });
        }
        
        // Inscrire l'utilisateur
        const newUser = await User.registerUser(
            { email, username, first_name, last_name },
            password
        );
        
        res.status(201).json({ 
            success: true, 
            message: 'User registered successfully', 
            user: newUser 
        });
    } catch (error) {
        console.error('Registration error:', error);
        
        // Gestion spécifique des erreurs
        if (error.message.includes('already exists')) {
            return res.status(409).json({ 
                success: false, 
                message: error.message 
            });
        }
        
        res.status(500).json({ 
            success: false, 
            message: 'Error during registration', 
            error: error.message 
        });
    }
};

// Contrôleur pour la connexion des utilisateurs
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Validation des données requises
        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'Username and password are required' 
            });
        }
        
        // Vérifier les identifiants
        const user = await User.verifyLogin(username, password);
        
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid username or password' 
            });
        }
        
        res.status(200).json({ 
            success: true, 
            message: 'Login successful', 
            user 
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error during login', 
            error: error.message 
        });
    }
};

// Contrôleur pour obtenir tous les utilisateurs
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json({ 
            success: true, 
            users 
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching users', 
            error: error.message 
        });
    }
};

// Contrôleur pour obtenir un utilisateur par ID
export const getUserById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid user ID' 
            });
        }
        
        const user = await User.getUserById(id);
        
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }
        
        res.status(200).json({ 
            success: true, 
            user 
        });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching user', 
            error: error.message 
        });
    }
};

// Contrôleur pour mettre à jour un utilisateur par ID
export const updateUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { email, username, first_name, last_name } = req.body;
        
        if (isNaN(id)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid user ID' 
            });
        }
        
        // Vérifier si l'utilisateur existe
        const userExists = await User.getUserById(id);
        
        if (!userExists) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }
        
        // Vérifier qu'au moins un champ à mettre à jour est fourni
        if (!email && !username && !first_name && !last_name) {
            return res.status(400).json({ 
                success: false, 
                message: 'At least one field is required for update' 
            });
        }
        
        // Mettre à jour l'utilisateur
        const updatedUser = await User.updateUser(id, { email, username, first_name, last_name });
        
        res.status(200).json({ 
            success: true, 
            message: 'User updated successfully', 
            user: updatedUser 
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error updating user', 
            error: error.message 
        });
    }
};
