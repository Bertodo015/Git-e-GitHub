# 🧭 Roteiro de Aula: Introdução ao Git e GitHub

Este repositório contém o roteiro completo de uma aula introdutória sobre **Git** e **GitHub**, com foco em iniciantes que desejam aprender versionamento de código na prática.

---

## 📌 Objetivos da Aula

- Compreender o que é controle de versão e por que usá-lo
- Aprender os principais comandos do Git
- Entender a diferença entre Git e GitHub
- Praticar o uso do Git com linha de comando
- Realizar o primeiro commit e push para um repositório remoto

---

## 🧠 Pré-requisitos

- Ter o Git instalado ([download aqui](https://git-scm.com/downloads))
- Conta no GitHub ([crie aqui](https://github.com/join))
- Editor de código (ex: VS Code)
- Terminal básico (cmd, PowerShell, Bash ou terminal do VS Code)

---

## 🗂️ Estrutura da Aula

1. **Introdução ao Git**
   - O que é o Git?
   - O que é versionamento?
   - Principais benefícios

2. **Instalação e Configuração Inicial**
   - `git config --global user.name`
   - `git config --global user.email`
   - `git config --list`

3. **Criando um repositório local**
   - `git init`
   - `git status`
   - `git add`
   - `git commit`

4. **Visualizando o histórico**
   - `git log`
   - `git show`
   - `git diff`

5. **Trabalhando com GitHub (Repositório Remoto)**
   - Criando um repositório no GitHub
   - `git remote add origin`
   - `git push -u origin main`

6. **Atualizando o repositório local**
   - `git pull`
   - `git fetch`

7. **Branches**
   - `git branch`
   - `git checkout -b`
   - `git merge`
   - `git branch -d`

8. **Resolvendo Conflitos**
   - Exemplos práticos
   - Boas práticas

9. **.gitignore e arquivos de configuração**
   - O que ignorar no versionamento
   - Criando um `.gitignore`

10. **Fluxo de trabalho recomendado (Git Flow simplificado)**
    - Desenvolvimento → Commit → Push → Pull Request

---

## 💻 Comandos Essenciais

```bash
# Configuração
git config --global user.name "Seu Nome"         # Define o nome de usuário nos commits
git config --global user.email "seu@email.com"   # Define o e-mail associado aos commits
git config --list                                # Lista todas as configurações atuais do Git

# Inicialização e status
git init                                         # Inicializa um repositório Git na pasta atual
git status                                       # Mostra o status dos arquivos no repositório

# Adicionando arquivos
git add arquivo.txt                              # Adiciona um arquivo específico à staging area
git add .                                        # Adiciona todas as alterações à staging area

# Salvando alterações
git commit -m "mensagem do commit"               # Salva as alterações com uma mensagem

# Visualizando histórico
git log                                          # Mostra o histórico de commits
git show                                         # Exibe detalhes do último commit (ou de um commit específico)
git diff                                         # Mostra as diferenças entre arquivos modificados e o último commit

# Conectando ao repositório remoto
git remote add origin https://github.com/seu-usuario/seu-repositorio.git  # Conecta ao repositório remoto

# Enviando para o GitHub
git push -u origin main                         # Envia a branch main ao repositório remoto (com upstream)
git push origin nome-da-branch                  # Envia uma branch específica para o remoto
git push <remote-name> <branch-name>            # Envia a branch indicada para o remote indicado (ex: origin main)

# Obtendo atualizações
git pull                                        # Baixa e aplica mudanças do repositório remoto
git fetch                                       # Baixa atualizações do remoto sem aplicar

# Branches
git branch                                      # Lista branches locais
git branch nome-da-branch                       # Cria uma nova branch
git checkout nome-da-branch                     # Muda para uma branch existente
git checkout -b nova-branch                     # Cria e já muda para a nova branch
git merge nome-da-branch                        # Faz merge da branch especificada com a branch atual
git branch -d nome-da-branch                    # Deleta uma branch local
git branch -a                                   # Lista todas as branches (locais e remotas)

# Reverter
git checkout -- nome-do-arquivo                 # Volta o arquivo ao estado do último commit
git reset nome-do-arquivo                       # Remove o arquivo da preparação para commit
git revert <hash-do-commit>                     # Cria um novo commit que desfaz as alterações do commit anterior
git reset --soft <hash>                         # Volta para um commit, mantendo as alterações na staging area
git reset --mixed <hash>                        # Volta para um commit, mantendo as alterações no diretório de trabalho
git reset --hard <hash>                         # Volta para um commit e remove todas as alterações posteriores (⚠️ perigoso!)

# Remover senha do VSC
cmdkey /delete:LegacyGeneric:target=git:https://github.com
