import React, { useState, useEffect } from 'react';
import 'react-day-picker/lib/style.css';

import {
  FaImage,
  FaPen,
  FaComment,
  FaBell,
  FaStickyNote,
  FaFile,
  FaUsers,
  FaCommentAlt,
  FaHeart,
  FaUserCircle,
} from 'react-icons/fa';

import { RiBookMarkLine, RiLoginBoxLine } from 'react-icons/ri'
import { AiFillSetting, AiFillTool } from 'react-icons/ai'

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import UsersList from '../../components/UsersList';

// import { Link } from 'react-router-dom';

import {
  Container,
  Menu,
  ProfileArea,
  Content,
  UserInfos,
  ButtonArea,
  Feed,
  PostImage,
} from './styles';

interface Post {
  id: string;
  content: string;
  image_url?: string;
  likes: number;
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    nickname: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { signOut, user } = useAuth();
  const token = localStorage.getItem('@Cosmo:token');

  useEffect(() => {
    api.get('posts').then(response => setPosts(response.data));
  }, [token])

  console.log(posts);

  return (
    <Container>
      <Menu>
        <div>
          <ProfileArea>
            <img src={user.avatar_url} alt={user.nickname} />
            <span>{user.nickname}</span>
          </ProfileArea>
          <footer>
            <FaPen size={30} color="#CACBDB" />
            <FaComment size={30} color="#CACBDB"/>
            <FaBell size={30} color="#CACBDB"/>
          </footer>
        </div>
        <main>
          <section>
            <FaImage size={30} />
            <h2>Portfólio</h2>
          </section>
          <section>
            <FaStickyNote size={30} />
            <h2>Blogs</h2>
          </section>
          <section>
            <FaFile size={30} />
            <h2>Páginas</h2>
          </section>
          <section>
            <RiBookMarkLine size={30} color="#CACBDB" />
            <h2>Catálogo</h2>
          </section>
          <section>
            <AiFillSetting size={30} />
            <h2>Configuração</h2>
          </section>
          <section>
            <FaUsers size={30} />
            <h2>Seu Cargo</h2>
          </section>
          <section>
            <AiFillTool size={30} />
            <h2>Painel</h2>
          </section>
          <section>
            <RiLoginBoxLine onClick={signOut} size={30} />
            <h2>Sair</h2>
          </section>
        </main>
      </Menu>
      <Content>
        <UserInfos>
          <img className="cover" src="https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="capa"/>
          <footer>
            <div>
              <span>Seguindo</span>
              <strong>2000</strong>
            </div>

            <main>
              <img src={user.avatar_url} alt={user.nickname} />
              <h1>{user.nickname}</h1>
            </main>

            <div>
              <span>Seguidores</span>
              <strong>2000</strong>
            </div>
          </footer>
        </UserInfos>

        <UsersList />

        <ButtonArea>
          <button>
            Enviar uma nova publicação
          </button>
        </ButtonArea>
      
        <Feed>
          <ul>
            {posts.map(post => (
                <li key={post.id} >
                <aside>
                  {post.user.avatar_url ?
                  (<img src={post.user.avatar_url} alt={post.user.nickname} />)
                  :
                  (<FaUserCircle size={45} />)
                }
                </aside>
  
                <main>
                  <h3>{post.user.nickname} - admin</h3>
                    {post.image_url && (
                      <PostImage>
                        <img src={post.image_url} alt={`post from ${post.user.nickname}`} />
                      </PostImage>
                    )}
                  <p>
                    {post.content}
                  </p>
                  
                  <footer>
                    <div>
                      <FaCommentAlt />
                      <span>300</span>
                    </div>
                    <div>
                      <FaHeart />
                      <span>{post.likes}</span>
                    </div>
                  </footer>
                </main>
              </li>
            ))}
          </ul>
        </Feed>
      </Content>
    </Container>
  );
}
export default Dashboard;
