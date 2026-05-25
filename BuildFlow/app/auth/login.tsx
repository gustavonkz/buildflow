import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

export default function LoginScreen() {
  const [userType, setUserType] = useState<'admin' | 'employee'>('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho de Texto (Sem o ícone de círculo) */}
        <View style={styles.header}>
          <Text style={styles.title}>BuildFlow</Text>
          <Text style={styles.subtitle}>Gestão inteligente de materiais</Text>
        </View>

        {/* Card Branco do Formulário */}
        <View style={styles.formCard}>
          <Text style={styles.selectLabel}>Entrar como:</Text>

          {/* Seleção de Tipo de Usuário */}
          <View style={styles.userTypeContainer}>
            <TouchableOpacity 
              style={[styles.typeButton, userType === 'admin' && styles.typeButtonActive]}
              onPress={() => setUserType('admin')}
            >
              <MaterialIcons 
                name="admin-panel-settings" 
                size={20} 
                color={userType === 'admin' ? '#fff' : '#d45511'} 
              />
              <Text style={[styles.typeButtonText, userType === 'admin' && styles.typeButtonTextActive]}>
                Administrador
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.typeButton, userType === 'employee' && styles.typeButtonActive]}
              onPress={() => setUserType('employee')}
            >
              <FontAwesome5 
                name="user-cog" 
                size={16} 
                color={userType === 'employee' ? '#fff' : '#d45511'} 
              />
              <Text style={[styles.typeButtonText, userType === 'employee' && styles.typeButtonTextActive]}>
                Funcionário
              </Text>
            </TouchableOpacity>
          </View>

          {/* Campo Email */}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="mail-outline" size={24} color="#666" style={styles.inputIcon} />
            <View style={styles.inputTextContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput 
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Campo Senha */}
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.inputIcon} />
            <View style={styles.inputTextContainer}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput 
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          {/* Opções de Lembrar-me e Esqueci Senha */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity 
              style={styles.rememberMeContainer} 
              onPress={() => setRememberMe(!rememberMe)}
            >
              <MaterialIcons 
                name={rememberMe ? "check-box" : "check-box-outline-blank"} 
                size={22} 
                color="#333" 
              />
              <Text style={styles.rememberMeText}>Lembrar-me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          {/* Botão Entrar */}
          <TouchableOpacity style={styles.submitButton} activeOpacity={0.9}>
            <Text style={styles.submitButtonText}>Entrar</Text>
          </TouchableOpacity>

        </View>

        {/* Criar Conta (Fora do card branco, diretamente no fundo laranja) */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Criar conta</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d45511', // Laranja de fundo idêntico à imagem
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#fff',
    opacity: 0.9,
    marginTop: 4,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  selectLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 14,
  },
  userTypeContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  typeButtonActive: {
    backgroundColor: '#b3420a', // Laranja mais escuro para o botão selecionado
    borderColor: '#b3420a',
  },
  typeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  typeButtonTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f2', // Fundo cinza claro dos inputs
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  inputTextContainer: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
  },
  input: {
    fontSize: 16,
    color: '#000',
    padding: 0, // Remove paddings internos padrão do Android
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 24,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#333',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#d45511',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
  },
  signupText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  signupLink: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});