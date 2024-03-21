from Crypto.Cipher import AES
import base64

def encrypt_id(id):
    # Initialize AES cipher
    cipher = AES.new('16-character-key', AES.MODE_ECB)
    
    # Pad the ID to match block size
    id_padded = id + (16 - len(id) % 16) * ' '
    
    # Encrypt the ID
    encrypted_id = base64.b64encode(cipher.encrypt(id_padded.encode())).decode()
    
    return encrypted_id