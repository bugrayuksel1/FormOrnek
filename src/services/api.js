const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
        expiresInMins: 60,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Giriş başarısız");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login error details:", error);
    throw new Error("Kullanıcı adı veya şifre hatalı");
  }
};

/* throw new Error, JavaScript'te bir hata (exception) oluşturup 
fırlatmak için kullanılan bir ifade biçimidir. Bu, bir işlem sırasında
 bir sorun olduğunda, işlemi durdurup hata yönetimini (error handling)
  tetiklemek için kullanılır.*/
