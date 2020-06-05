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
  FaHeart
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
  image?: string;
  likes: number;
  created_at: string;
  updated_at: string;  
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { signOut, user } = useAuth();


  useEffect(() => {
    api.get('posts').then(response => setPosts(response.data));
  }, [])

  console.log(posts);

  return (
    <Container>
      <Menu>
        <div>
          <ProfileArea>
            <img src="https://avatars0.githubusercontent.com/u/53975579?s=460&u=67d971f4db235ae4031471e693f8284fcabe2f6c&v=4" alt=""/>
            <span>andrecampll</span>
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
              <img src="https://avatars0.githubusercontent.com/u/53975579?s=460&u=67d971f4db235ae4031471e693f8284fcabe2f6c&v=4" alt="user"/>
              <h1>andrecampll</h1>
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
            <li>
              <aside>
                <img src="https://avatars0.githubusercontent.com/u/53975579?s=460&u=67d971f4db235ae4031471e693f8284fcabe2f6c&v=4" alt="username"/>
              </aside>

              <main>
                <h3>andrecampll/admin</h3>
                <PostImage>
                  <img src="https://i.pinimg.com/originals/af/53/55/af5355d2e928deb428fd3961a317cca4.jpg" alt=""/>
                </PostImage>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim vero ut excepturi reiciendis repudiandae distinctio vel praesentium quaerat neque, natus veniam. Illo nisi ducimus repellendus repudiandae iste, quae facilis rerum.</p>
                
                <footer>
                  <div>
                    <FaCommentAlt />
                    <span>300</span>
                  </div>
                  <div>
                    <FaHeart />
                    <span>300</span>
                  </div>
                </footer>
              </main>
            </li>

            <li>
              <aside>
                <img src="https://avatars0.githubusercontent.com/u/53975579?s=460&u=67d971f4db235ae4031471e693f8284fcabe2f6c&v=4" alt="username"/>
              </aside>

              <main>
                <h3>andrecampll/admin</h3>
                <PostImage>
                  <img src="https://i.pinimg.com/originals/af/53/55/af5355d2e928deb428fd3961a317cca4.jpg" alt=""/>
                </PostImage>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim vero ut excepturi reiciendis repudiandae distinctio vel praesentium quaerat neque, natus veniam. Illo nisi ducimus repellendus repudiandae iste, quae facilis rerum.</p>
                
                <footer>
                  <div>
                    <FaCommentAlt />
                    <span>300</span>
                  </div>
                  <div>
                    <FaHeart />
                    <span>300</span>
                  </div>
                </footer>
              </main>
            </li>

            <li>
              <aside>
                <img src="https://avatars0.githubusercontent.com/u/53975579?s=460&u=67d971f4db235ae4031471e693f8284fcabe2f6c&v=4" alt="username"/>
              </aside>

              <main>
                <h3>andrecampll/admin</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim vero ut excepturi reiciendis repudiandae distinctio vel praesentium quaerat neque, natus veniam. Illo nisi ducimus repellendus repudiandae iste, quae facilis rerum.</p>
                
                <footer>
                  <div>
                    <FaCommentAlt />
                    <span>300</span>
                  </div>
                  <div>
                    <FaHeart />
                    <span>300</span>
                  </div>
                </footer>
              </main>
            </li>
          </ul>
        </Feed>
      </Content>
    </Container>
  );
}
export default Dashboard;
